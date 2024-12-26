using EnterpriseTaskManagementApi.CustomExceptions;
using EnterpriseTaskManagementApi.Models;
using EnterpriseTaskManagementApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace EnterpriseTaskManagementApi.Controllers;

[ApiController]
[Route("api/projects", Name = "Projects")]
public class ProjectsController : ControllerBase
{
    private IProjectsService _service;

    public ProjectsController(IProjectsService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Project>>> GetTasksAsync()
    {
        try
        {
            var entities = await _service.GetProjectsAsync();
            return Ok(entities);
        }
        catch (NotFoundException e)
        {
            return NotFound(new { message = e.Message });
        }
        catch (Exception)
        {
            return StatusCode(500, new { message = "An error ocurred while processing your request" });
        }

    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Project>> GetTaskByIdAsync(Guid id)
    {
        try
        {
            var entity = await _service.GetProjectByIdServiceAsync(id);
            return Ok(entity);
        }
        catch (NotFoundException e)
        {
            return NotFound(new { message = e.Message });
        }
        catch (Exception)
        {
            return StatusCode(500, new { message = "An error ocurred while processing your request" });
        }
    }

    [HttpPost]
    public async Task<Project> AddTaskAsync(ProjectDTO project)
    {
        return await _service.AddProjectServiceAsync(project);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Project>> UpdateTaskAsync(Guid id, ProjectDTO taskItem)
    {
        try
        {
            var entity = await _service.UpdateProjectServiceAsync(id, taskItem);
            return Ok(entity);
        }
        catch (NotFoundException e)
        {
            return NotFound(new { message = e.Message });
        }
        catch (Exception)
        {
            return StatusCode(500, new { message = "An error ocurred while processing your request" });
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Project>> DeleteTaskByIdAsync(Guid id)
    {
        try
        {
            var entity = await _service.DeleteProjectServiceAsync(id);
            return Ok(entity);
        }
        catch (NotFoundException e)
        {
            return NotFound(new { message = e.Message });
        }
        catch (Exception)
        {
            return StatusCode(500, new { message = "An error ocurred while processing your request" });
        }
    }
}