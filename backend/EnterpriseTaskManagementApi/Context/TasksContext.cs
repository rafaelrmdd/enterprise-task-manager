using Microsoft.EntityFrameworkCore;
using EnterpriseTaskManagementApi.Models;

namespace EnterpriseTaskManagementApi.Context;

public class TasksContext : DbContext
{
	public TasksContext(DbContextOptions options) : base(options) { }

	public DbSet<TaskItem> Tasks { get; set; } = null!;
}