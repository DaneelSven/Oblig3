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
                        Question = "How many tickets can I buy a ticket?",
                        Answers = "You can buy as many tickets as you want!",
                        Date = "7/11/2019 22:00"
                        

                    },
                    new Questions
                    {
                        Question = "Do Trains drive on a sunday?",
                        Answers = "Yes, but not as frequently",
                        Date = "21/7/2019 12:00"

                    },
                    new Questions
                    {
                        Question = "Can I take my bike on the train?",
                        Answers = "Yes and it wont cost you anything extra.",
                        Date = "05/7/2019 15:00"
                    },
                    new Questions
                    {
                        Question = "What happenes if i forget my Student ID?",
                        Answers = "You will have to pay a small fine and provide the evidence later that you are a student.",
                        Date = "09/7/2019 17:30"
                    },
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
