using System;
using System.IO;
using System.Text.RegularExpressions;
using Microsoft.Build.Framework;

namespace ChocolateTS.Build.Tasks
{
    public class ResolveScssImports : Microsoft.Build.Utilities.Task
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

            Output = LoadScss(EntryPointPath);

            return true;
        }

        private void LogMessage(string message)
        {
            Log.LogMessage(MessageImportance.Normal, message);
        }

        private string LoadScss(string path)
        {
            var directory = Path.GetDirectoryName(path);
            var fullPath = System.IO.Path.Combine(SourceDirectory, path);
            LogMessage($"Loading \"{fullPath}\"");
            var scss = File.ReadAllText(fullPath);

            scss = Regex.Replace(scss, @"\@import(\s+)\""([\w, \/, \\, \.]+)\"";", (match) => {
                LogMessage($"Found \"{match.Groups[0].Value}\"");
                return
                    $"/* Begin: \"{match.Groups[2].Value}\" */" +
                    Environment.NewLine +
                    LoadScss(Path.Combine(directory, match.Groups[2].Value)) +
                    Environment.NewLine +
                    $"/* End: \"{match.Groups[2].Value}\" */";
            });

            return scss;
        }
    }
}