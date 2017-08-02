import { Injectable } from '@angular/core';
  
enum EmploymentType { "Permanent", "Temporary", "Project" }
enum ExperienceLevels { "Junior", "Seasoned", "Lead", "GrayBeard" }
enum CompanySize { "LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred" }
enum VersionControlSystem { "NotYetChosen", "Git", "BitBucket" }
enum IssueTrackers { "NotYetChosen", "GitHub", "Jira" }
enum BuildServers { "NotYetChosen", "Jenkins", "Travis", "Codeship" }
enum CodeAnalysisTools { "NotYetChosen", "ESLint" }
enum KnowledgeRepos { "NotYetChosen", "GitHubWiki", "Confluence" }
enum TravelOptions { "None", "Possible", "Plentiful" }
enum ScheduleOptions { "Fixed", "Flexible" }
enum RemoteWorking { "No", "Negotiable", "Required" }
enum RelocationPackages { "Nonealse", "Negotiable" }
enum OperationSystems { "MacOSX", "CentOS", "Ubuntu", "Windows" }
enum MachineType { "Workstation", "Laptop" }
enum Monitors { "Negotiable" }
enum Level { "Familiar", "Good", "Expert" }
enum TrainingType { "None", "Informal", "Formal", "External" }
enum PTO { "Accrued", "Unlimited" }

@Injectable()
export class EnumService {
  EmploymentType: EmploymentType;
  ExperienceLevels: ExperienceLevels;
  CompanySize: CompanySize;
  VersionControlSystem: VersionControlSystem;
  IssueTrackers: IssueTrackers;
  BuildServers: BuildServers;
  CodeAnalysisTools: CodeAnalysisTools;
  KnowledgeRepos: KnowledgeRepos;
  TravelOptions: TravelOptions;
  ScheduleOptions: ScheduleOptions;
  RemoteWorking: RemoteWorking;
  RelocationPackages: RelocationPackages;
  OperationSystems: OperationSystems;
  MachineType: MachineType;
  Monitors: Monitors;
  Level: Level;
  TrainingType: TrainingType;
  PTO: PTO;
}
