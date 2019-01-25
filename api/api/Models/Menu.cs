namespace api.Models
{
    public class Menu
    {
        public int Level { get; set; }
        public string Label { get; set; }
        public string Link { get; set; }
        public string ParentLabel { get; set; }
    }
}