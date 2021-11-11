using MmaAthletesApi.Models;
using MmaAthletesApi.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace MmaAthletesApi.Services
{
    public class MmaAthleteService
    {
        private readonly IMongoCollection<MmaAthlete> _mmaAthletes;

        public MmaAthleteService(IMmaAthleteDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _mmaAthletes = database.GetCollection<MmaAthlete>(settings.MmaAthleteCollectionName);
        }

        public List<MmaAthlete> Get()
        {
            return _mmaAthletes.Find( mmaAthlete => true).ToList();
        }

        public MmaAthlete Create(MmaAthlete newMmaAthlete)
        {
            _mmaAthletes.InsertOne(newMmaAthlete);
            return newMmaAthlete;
        }
    }
}