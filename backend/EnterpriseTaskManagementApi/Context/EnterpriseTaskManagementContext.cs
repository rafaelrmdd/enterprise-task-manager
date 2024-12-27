using Microsoft.EntityFrameworkCore;
using EnterpriseTaskManagementApi.Models;

namespace EnterpriseTaskManagementApi.Context;

public class EnterpriseTaskManagementContext : DbContext
{
	public EnterpriseTaskManagementContext(DbContextOptions options) : base(options) { }

	public DbSet<TaskItem> Tasks { get; set; } = null!;
	public DbSet<Project> Projects { get; set; } = null!;
	public DbSet<Member> Members { get; set; } = null!;
}