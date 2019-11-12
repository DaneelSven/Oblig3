using System;
using System.ComponentModel.DataAnnotations;

namespace FAQOblig.Models
{
    public class Contact
    {
        [Key]
        public int ID { get; set; }

        [Display(Name = "FirstName")]
        [Required(ErrorMessage = "Please enter a FirstName")]
        public String Firstname { get; set; }


        [Display(Name = "LastName")]
        [Required(ErrorMessage = "Please enter a LastName")]
        public String Lastname { get; set; }

        [EmailAddress(ErrorMessage = "Please provide a valid Email Address")]
        public String Email { get; set; }

        [Display(Name = "Question")]
        [Required(ErrorMessage ="Please provide a Question")]
        public String Question { get; set; }
    }
}
