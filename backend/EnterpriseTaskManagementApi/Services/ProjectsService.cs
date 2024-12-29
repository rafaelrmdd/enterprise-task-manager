using EnterpriseTaskManagementApi.Context;
using EnterpriseTaskManagementApi.CustomExceptions;
using EnterpriseTaskManagementApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EnterpriseTaskManagementApi.Services;

public class ProjectsService : IProjectsService
{
    public EnterpriseTaskManagementContext _context;

    public ProjectsService(EnterpriseTaskManagementContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Project>> GetProjectsAsync()
    {
        var entities = await _context.Projects.ToListAsync();

        if (entities.Count < 1)
        {
            throw new NotFoundException("No project found.");
        }

        return entities;
    }

    public async Task<Project> GetProjectByIdServiceAsync(Guid id)
    {
        var entity = await _context.Projects.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Project with id: " + id + "   was not found.");
        }

        return entity;
    }

    public async Task<Project> AddProjectServiceAsync(ProjectDTO project)
    {
        var entity = new Project(
            project.Title,
            project.Status,
            project.Deadline
        );

        await _context.Projects.AddAsync(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

    public async Task<Project> UpdateProjectServiceAsync(Guid id, ProjectDTO project)
    {
        var entity = await _context.Projects.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Project with id: " + id + " was not found.");
        }

        entity.Title = project.Title;
        entity.Status = project.Status;
        entity.Deadline = project.Deadline;

        await _context.SaveChangesAsync();

        return entity;
    }

    public async Task<Project> DeleteProjectServiceAsync(Guid id)
    {
        var entity = await _context.Projects.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Project with id: " + id + " was not found.");
        }

        _context.Projects.Remove(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

}