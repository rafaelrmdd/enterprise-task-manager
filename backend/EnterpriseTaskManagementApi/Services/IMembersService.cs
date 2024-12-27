using EnterpriseTaskManagementApi.Enums;
using EnterpriseTaskManagementApi.Models;

namespace EnterpriseTaskManagementApi.Services;

public interface IMembersService
{
    public Task<IEnumerable<Member>> GetMembersAsync();
    public Task<Member> GetMemberByIdServiceAsync(Guid id);
    public Task<Member> AddMemberServiceAsync(MemberDTO member);
    public Task<Member> UpdateMemberServiceAsync(Guid id, MemberDTO member);
    public Task<Member> DeleteMemberServiceAsync(Guid id);
}