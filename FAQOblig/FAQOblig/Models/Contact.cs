﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FAQOblig.Models
{
    public class Contact
    {
        [Key]
        public int ID { get; set; }

        [Display(Name = "FirstName")]
        [Required(ErrorMessage = "Please enter a FirstName")]
        public String FirstName { get; set; }


        [Display(Name = "LastName")]
        [Required(ErrorMessage = "Please enter a LastName")]
        public String LastName { get; set; }

        [EmailAddress(ErrorMessage = "Please provide a valid Email Address")]
        public String Email { get; set; }

        [Display(Name = "Question")]
        [Required(ErrorMessage ="Please provide a Question")]
        public String Question { get; set; }
    }
}
