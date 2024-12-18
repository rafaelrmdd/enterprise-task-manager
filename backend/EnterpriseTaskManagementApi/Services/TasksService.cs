using EnterpriseTaskManagementApi.Context;
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

        return entities;
    }

    public async Task<TaskItem> GetTaskByIdServiceAsync(Guid id)
    {
        var entity = await _context.Tasks.FindAsync(id);

        //maybe it will return null, the verification is on the controller
        return entity!;
    }

    public Task<IEnumerable<TaskItem>> AddTaskAsync()
    {
        throw new NotImplementedException();
    }

    public Task<TaskItem> UpdateTaskServiceAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<TaskItem> DeleteTaskServiceAsync(Guid id)
    {
        var entity = await _context.Tasks.FindAsync(id);

        _context.Tasks.Remove(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

    public Task<TaskItem> GetTaskByIdServiceAsync()
    {
        throw new NotImplementedException();
    }

}