using EnterpriseTaskManagementApi.Enums;

namespace EnterpriseTaskManagementApi.Models;

public class TaskItem
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? Project { get; set; }
    public string? Responsible { get; set; }
    public DateTime Deadline { get; set; }
    public TaskStatusEnum Status { get; set; }

    public TaskItem(string title, string? project, string responsible, DateTime deadline, TaskStatusEnum status)
    {
        Title = title;
        Project = project;
        Responsible = responsible;
        Deadline = deadline;
        Status = status;
    }
}