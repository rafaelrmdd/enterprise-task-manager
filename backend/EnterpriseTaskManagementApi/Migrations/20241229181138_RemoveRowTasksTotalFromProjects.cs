using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnterpriseTaskManagementApi.Migrations
{
    /// <inheritdoc />
    public partial class RemoveRowTasksTotalFromProjects : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TasksTotal",
                table: "Projects");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TasksTotal",
                table: "Projects",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
