using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FAQOblig.Models
{
    public class SeedDB
    {
        public static void Initilaze(IServiceScope serviceSope)
        {
            var dbContext = serviceSope.ServiceProvider.GetRequiredService<DB>();
            if (!dbContext.Questions.Any())
            {
                var questions = new Questions[]
                {
                    new Questions
                    {
                        Question = " this shit",
                        Answers = "please make it work"

                    },
                    new Questions
                    {
                        Question = " this shit2",
                        Answers = "please make it work"
                    }
                };
                foreach (Questions i in questions)
                {
                    dbContext.Questions.Add(i);
                    dbContext.SaveChanges();
                }
            }
        }
    
    }
}
