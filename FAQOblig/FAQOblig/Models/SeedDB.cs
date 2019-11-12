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
                        Question = "Can I receive reimbursement for expenses incurred due to delays?",
                        Answers = "In situations where you must use alternative transport methods or incur other expenses due to train delays or cancellations," +
                        " you may be eligible for a full or partial reimbursement of your expenses. Claims for reimbursement must be submitted in writing along with documentation of your expenses no later than three months after the incident.",
                        Votes = 26
                    },
                    new Questions
                    {
                        Question = "Why are trains so crowded?",
                        Answers = "During rush hour, all available trains are in use. We are doing our best to match demand with the right capacity, " +
                        "but still it’s not possible to provide seating for all passengers. We are continuously receiving new trains from the manufacturer, " +
                        "which will enable us to add capacity where this is needed the most. " + "There may be several reasons why a train is crowded. For instance, if a previous departure was delayed or cancelled, it could entail that the next departure will have more passengers than usual." +
                        " Sometimes situations outside of our control could force us to have departures with less carriages than planned. In that case, we often offer transportation by bus in addition to the train.",
                        Votes = 10

                    },
                    new Questions
                    {
                        Question = "Can I take pets onboard the train?",
                        Answers = "Animals that are permitted to be brought on board our trains are dogs, cats, rodents in cages, caged birds, and small turtles. You may also bring aquarium fish provided they are securely and responsibly carried in containers." +
                        " Other types of animals are not welcome on board our trains; these include insects, spiders, reptiles and amphibians.",
                        Votes = 12
                    },
                    new Questions
                    {
                        Question = "How long ahead of departure can I purchase a train ticket?",
                        Answers = "Tickets are released for sale 90 days before departure. There may be shorter sales periods if there is planned" +
                        " work on the train’s route or in connection with route changes in June and December.",
                        Votes = 20
                    },
                    new Questions
                    {
                        Question = "What happenes if i forget my Student ID?",
                        Answers = "You will have to pay a small fine and provide the evidence at one of .",
                        Votes = 3
                    },            
                    new Questions
                    {
                        Question = "Can I sit in a regular seat on board a night train?",
                        Answers = "Yes, and along with seating on the night train you will receive a package containing a pillow, blanket, sleeping mask, and ear plugs, at no additional cost." +
                        " Simply pick up your package in the café car. Feel free to take the package home; if you leave it on board, we donate the blankets to charity. Most of our train seats can be adjusted so you can recline and relax.",
                        Votes = 14
                    },                   
                    new Questions
                    {
                        Question = "Can I bring skis or a snowboard?",
                        Answers = "Skis and snowboards must be placed in designated areas; however, you remain personally responsible for your equipment throughout the journey. Skis must be securely contained and stored.",
                        Votes = 5
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
