using EnterpriseTaskManagementApi.Enums;

public record TaskItemDTO(string Title, string Project, string Responsible, DateTime Deadline, StatusEnum Status, string ProjectName);