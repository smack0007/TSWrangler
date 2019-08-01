using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Microsoft.Build.Framework;

namespace ChocolateTS.Build.Tasks
{
    public class ResolveHtmlImports : Microsoft.Build.Utilities.Task
    {
        [Required]
        public string EntryPointPath { get; set; }

        [Required]
        public string SourceDirectory { get; set; }

        [Output]
        public string Output { get; set;}

        public override bool Execute()
        {
            LogMessage($"{nameof(EntryPointPath)} = {EntryPointPath}");
            LogMessage($"{nameof(SourceDirectory)} = {SourceDirectory}");            

            Output = LoadHtml(EntryPointPath);

            return true;
        }

        private void LogMessage(string message)
        {
            Log.LogMessage(MessageImportance.Normal, message);
        }

        private string LoadHtml(string path)
        {
            var directory = Path.GetDirectoryName(path);
            var fullPath = System.IO.Path.Combine(SourceDirectory, path);
            LogMessage($"Loading \"{fullPath}\"");
            var html = File.ReadAllText(fullPath);

            html = Regex.Replace(html, @"\<import(\s+)src\=\""([\w, \/, \\, \.]+)\""\>(.*)\<\/import\>", (match) => {
                return 
                    $"<!-- Begin: \"{match.Groups[2].Value}\" -->" +
                    Environment.NewLine +
                    LoadHtml(Path.Combine(directory, match.Groups[2].Value)) +
                    Environment.NewLine +
                    $"<!-- End: \"{match.Groups[2].Value}\" -->";
            });

            return html;
        }
    }
}