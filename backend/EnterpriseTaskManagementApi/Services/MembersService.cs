using EnterpriseTaskManagementApi.Context;
using EnterpriseTaskManagementApi.CustomExceptions;
using EnterpriseTaskManagementApi.Enums;
using EnterpriseTaskManagementApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EnterpriseTaskManagementApi.Services;

public class MembersService : IMembersService
{
    public EnterpriseTaskManagementContext _context;

    public MembersService(EnterpriseTaskManagementContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Member>> GetMembersAsync()
    {
        var entities = await _context.Members.ToListAsync();

        if (entities.Count < 1)
        {
            throw new NotFoundException("No member found.");
        }

        return entities;
    }

    public async Task<Member> GetMemberByIdServiceAsync(Guid id)
    {
        var entity = await _context.Members.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Members with id: " + id + "   was not found.");
        }

        return entity;
    }

    public async Task<Member> AddMemberServiceAsync(MemberDTO member)
    {
        var entity = new Member(
            member.Name,
            member.Role,
            member.Email,
            member.PhoneNumber
        );

        await _context.Members.AddAsync(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

    public async Task<Member> UpdateMemberServiceAsync(Guid id, MemberDTO member)
    {
        var entity = await _context.Members.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Member with id: " + id + " was not found.");
        }

        entity.Name = member.Name;
        entity.Role = member.Role;
        entity.Email = member.Email;
        entity.PhoneNumber = member.PhoneNumber;

        await _context.SaveChangesAsync();

        return entity;
    }

    public async Task<Member> DeleteMemberServiceAsync(Guid id)
    {
        var entity = await _context.Members.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException("Member with id: " + id + " was not found.");
        }

        _context.Members.Remove(entity);
        await _context.SaveChangesAsync();

        return entity;
    }

}