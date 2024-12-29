using EnterpriseTaskManagementApi.Enums;

namespace EnterpriseTaskManagementApi.Models;

public class Project
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public StatusEnum Status { get; set; }
    public DateTime Deadline { get; set; }

    public Project(string title, StatusEnum status, DateTime deadline)
    {
        Title = title;
        Status = status;
        Deadline = deadline;
    }
}