using EnterpriseTaskManagementApi.CustomExceptions;
using EnterpriseTaskManagementApi.Models;
using EnterpriseTaskManagementApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace EnterpriseTaskManagementApi.Controllers;

[ApiController]
[Route("api/tasks")]
public class EnterpriseTaskManagementApi : ControllerBase
{
    private ITasksService _service;

    public EnterpriseTaskManagementApi(ITasksService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasksAsync()
    {
        try
        {
            var entities = await _service.GetTasksAsync();
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
    public async Task<ActionResult<TaskItem>> GetTaskByIdAsync(Guid id)
    {
        try
        {
            var entity = await _service.GetTaskByIdServiceAsync(id);
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
    public async Task<TaskItem> AddTaskAsync(TaskItemDTO taskItem)
    {
        return await _service.AddTaskServiceAsync(taskItem);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<TaskItem>> UpdateTaskAsync(Guid id, TaskItemDTO taskItem)
    {
        try
        {
            var entity = await _service.UpdateTaskServiceAsync(id, taskItem);
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
    public async Task<ActionResult<TaskItem>> DeleteTaskByIdAsync(Guid id)
    {
        try
        {
            var entity = await _service.DeleteTaskServiceAsync(id);
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