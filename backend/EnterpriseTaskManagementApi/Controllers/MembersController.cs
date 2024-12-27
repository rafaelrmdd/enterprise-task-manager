using EnterpriseTaskManagementApi.CustomExceptions;
using EnterpriseTaskManagementApi.Enums;
using EnterpriseTaskManagementApi.Models;
using EnterpriseTaskManagementApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace EnterpriseTaskManagementApi.Controllers;

[ApiController]
[Route("api/members", Name = "Members")]
public class MembersController : ControllerBase
{
    private IMembersService _service;

    public MembersController(IMembersService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Member>>> GetMembersAsync()
    {
        try
        {
            var entities = await _service.GetMembersAsync();
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
    public async Task<ActionResult<Member>> GetMemberByIdAsync(Guid id)
    {
        try
        {
            var entity = await _service.GetMemberByIdServiceAsync(id);
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
    public async Task<Member> AddMemberAsync(MemberDTO member)
    {
        return await _service.AddMemberServiceAsync(member);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Member>> UpdateTaskAsync(Guid id, MemberDTO member)
    {
        try
        {
            var entity = await _service.UpdateMemberServiceAsync(id, member);
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
    public async Task<ActionResult<Member>> DeleteMemberByIdAsync(Guid id)
    {
        try
        {
            var entity = await _service.DeleteMemberServiceAsync(id);
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