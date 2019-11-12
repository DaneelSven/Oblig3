using Microsoft.EntityFrameworkCore;

namespace FAQOblig.Models
{
    public class DB : DbContext
    {
        public DB(DbContextOptions<DB> options) : base(options)
        {
        }

        public DbSet<Questions> Questions { get; set; }

        public DbSet<Contact> Contact { get; set; }
    }
}
