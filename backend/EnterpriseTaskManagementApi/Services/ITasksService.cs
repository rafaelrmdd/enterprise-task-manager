using EnterpriseTaskManagementApi.Models;

namespace EnterpriseTaskManagementApi.Services;

public interface ITasksService
{
    public Task<IEnumerable<TaskItem>> GetTasksAsync();
    public Task<TaskItem> GetTaskByIdServiceAsync(Guid id);
    public Task<TaskItem> AddTaskServiceAsync(TaskItemDTO taskItem);
    public Task<TaskItem> UpdateTaskServiceAsync(Guid id, TaskItemDTO taskItemDTO);
    public Task<TaskItem> DeleteTaskServiceAsync(Guid id);
}