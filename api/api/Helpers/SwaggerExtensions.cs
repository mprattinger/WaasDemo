
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Swashbuckle.AspNetCore.Swagger;

namespace api.Helpers {
    public static class SwaggerExtensions {
        public static Info CreateInfoForApiVersion(this ApiVersionDescription description){
            var info = new Info(){
                Title = $"BECOM WAAS Api {description.ApiVersion}",
                Version = description.ApiVersion.ToString(),
                Description = "BECOM WAAS Api",
                Contact = new Contact() { Name = "Michael Prattinger", Email = "michael.prattinger@becom-group.com"},
                TermsOfService  = "(c) BECOM Electronics GmbH"
            };

            if(description.IsDeprecated){
                info.Description += " Diese Version is nicht mehr gültig und wird nicht mehr supported!";
            }

            return info;
        }
    }
}