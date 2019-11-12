using System;
using System.ComponentModel.DataAnnotations;

namespace FAQOblig.Models
{
    public class Questions
    {
        [Key]
        public int ID { get; set; }
        public String Question { get; set; }

        public String Answers { get; set; }

        public int Votes { get; set; }
    }
}
