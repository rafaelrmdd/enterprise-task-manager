using EnterpriseTaskManagementApi.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace EnterpriseTaskManagementApi.Models;

public class Project
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public StatusEnum Status { get; set; }
    public DateTime Deadline { get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;


    public Project(string title, StatusEnum status, DateTime deadline)
    {
        Title = title;
        Status = status;
        Deadline = deadline;
    }
}