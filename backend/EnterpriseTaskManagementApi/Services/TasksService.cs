using EnterpriseTaskManagementApi.Context;
using EnterpriseTaskManagementApi.CustomExceptions;
using EnterpriseTaskManagementApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EnterpriseTaskManagementApi.Services;

public class TasksService : ITasksService
{
    public TasksContext _context;

    public TasksService(TasksContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<TaskItem>> GetTasksAsync()
    {
        var entities = await _context.Tasks.ToListAsync();

        if (entities is null)
        {
            throw new NotFoundException("No tasks found.");
        }

        return entities;
    }

    public async Task<TaskItem> GetTaskByIdServiceAsync(Guid id)
    {
        var entity = await _context.Tasks.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Task with id: " + id + "was not found.");
        }

        return entity;
    }

    public async Task<TaskItem> AddTaskServiceAsync(TaskItemDTO taskItem)
    {
        var entity = new TaskItem(
            taskItem.Title,
            taskItem.Project,
            taskItem.Responsible,
            taskItem.Deadline,
            taskItem.Status
        );

        await _context.Tasks.AddAsync(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

    public async Task<TaskItem> UpdateTaskServiceAsync(Guid id, TaskItemDTO taskItemDTO)
    {
        var entity = await _context.Tasks.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Task with id: " + id + "was not found.");
        }

        entity.Title = taskItemDTO.Title;
        entity.Project = taskItemDTO.Project;
        entity.Responsible = taskItemDTO.Responsible;
        entity.Deadline = taskItemDTO.Deadline;
        entity.Status = taskItemDTO.Status;

        await _context.SaveChangesAsync();

        return entity;
    }

    public async Task<TaskItem> DeleteTaskServiceAsync(Guid id)
    {
        var entity = await _context.Tasks.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Task with id: " + id + "was not found.");
        }

        _context.Tasks.Remove(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

}