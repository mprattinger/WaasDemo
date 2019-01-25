
using System.Collections.Generic;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers {
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase {
        
        [HttpGet()]
        public JsonResult Get(){
            var menuItems = new List<Menu>();
            
            var item = new Menu() { Level = 1, ParentLabel = string.Empty, Link = "", Label = "Stücklistenkopf"};
            menuItems.Add(item);
            item = new Menu() { Level = 1, ParentLabel = string.Empty, Link = "", Label = "Arbeitsplan"};
            menuItems.Add(item);
            item = new Menu() { Level = 1, ParentLabel = string.Empty, Link = "", Label = "Berichte"};
            menuItems.Add(item);
            item = new Menu() { Level = 1, ParentLabel = string.Empty, Link = "", Label = "Dokumente (Kunde)"};
            menuItems.Add(item);
            item = new Menu() { Level = 1, ParentLabel = string.Empty, Link = "", Label = "Rückmeldungen"};
            menuItems.Add(item);

            item = new Menu() { Level = 2, ParentLabel = "Arbeitsplan", Link = "", Label = "Vorbereiten" };
            menuItems.Add(item);
            item = new Menu() { Level = 2, ParentLabel = "Arbeitsplan", Link = "", Label = "Nutzentrennen" };
            menuItems.Add(item);
            item = new Menu() { Level = 2, ParentLabel = "Arbeitsplan", Link = "", Label = "Bestücken" };
            menuItems.Add(item);
            item = new Menu() { Level = 2, ParentLabel = "Arbeitsplan", Link = "", Label = "Aus-/Endfertigen" };
            menuItems.Add(item);
            item = new Menu() { Level = 2, ParentLabel = "Arbeitsplan", Link = "", Label = "Verpacken" };
            menuItems.Add(item);

            item = new Menu() { Level = 3, ParentLabel = "Bestücken", Link = "", Label = "Seite 1" };
            menuItems.Add(item);
            item = new Menu() { Level = 3, ParentLabel = "Bestücken", Link = "", Label = "Seite 2" };
            menuItems.Add(item);
            item = new Menu() { Level = 3, ParentLabel = "Bestücken", Link = "", Label = "Step-by-Step" };
            menuItems.Add(item);

            return new JsonResult(menuItems);
        }
    }
}