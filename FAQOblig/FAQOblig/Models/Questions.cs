using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FAQOblig.Models
{
    public class Questions
    {
        [Key]
        public int ID { get; set; }
        public String Question { get; set; }

        public String Answers { get; set; }

        public String Votes { get; set; }
    }
}
