namespace EnterpriseTaskManagementApi.Models;
using System.ComponentModel.DataAnnotations.Schema;

public class Member
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Role { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public Member(string name, string role, string email, string phoneNumber)
    {
        Name = name;
        Role = role;
        Email = email;
        PhoneNumber = phoneNumber;

    }
}