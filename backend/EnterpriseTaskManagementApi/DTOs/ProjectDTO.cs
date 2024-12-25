using EnterpriseTaskManagementApi.Enums;

public record ProjectDTO(string Title, StatusEnum Status, DateTime Deadline, int TasksTotal);