using EnterpriseTaskManagementApi.Models;

namespace EnterpriseTaskManagementApi.Services;

public interface ITasksService
{
    public Task<IEnumerable<TaskItem>> GetTasksAsync();
    public Task<TaskItem> GetTaskByIdServiceAsync();
    public Task<TaskItem> AddTaskServiceAsync();
    public Task<TaskItem> UpdateTaskServiceAsync();
    public Task<TaskItem> DeleteTaskServiceAsync();
}