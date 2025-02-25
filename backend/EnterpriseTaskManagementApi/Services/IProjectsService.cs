using EnterpriseTaskManagementApi.Models;

namespace EnterpriseTaskManagementApi.Services;

public interface IProjectsService
{
    public Task<IEnumerable<Project>> GetProjectsAsync();
    public Task<Project> GetProjectByIdServiceAsync(Guid id);
    public Task<Project> AddProjectServiceAsync(ProjectDTO project);
    public Task<Project> UpdateProjectServiceAsync(Guid id, ProjectDTO project);
    public Task<Project> DeleteProjectServiceAsync(Guid id);
}