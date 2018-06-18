﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public bool Deleted { get; set; }
        public string FullName { get; set; }
        public DateTime? Birthday { get; set; }
        public bool Activated { get; set; }
        public string PersonalDocument { get; set; }
        public virtual List<Rent> Renting { get; set; }
    }
}