using Microsoft.AspNetCore.Mvc;
using MmaAthletesApi.Models;
using MmaAthletesApi.Services;
using System.Collections.Generic;

namespace MmaAthletesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MmaAthleteController : ControllerBase
    {
        private readonly MmaAthleteService _mmaAthleteService;
        public MmaAthleteController(MmaAthleteService mmaAthleteService)
        {
            _mmaAthleteService = mmaAthleteService;
        }

        [HttpGet]
        public IEnumerable<MmaAthlete> Get()
        {
            return _mmaAthleteService.Get();
        }
    }
}