using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Shelter.Models;

namespace Shelter2._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertsController : ControllerBase
    {

        private readonly IAdvertRepository _advertRepository;
        private readonly IUserRepository _userRepository;
        private readonly UserManager<IdentityUser> _userManager;

        public AdvertsController(IAdvertRepository advertRepository, IUserRepository userRepository, UserManager<IdentityUser> userManager)
        {
            _advertRepository = advertRepository;
            _userRepository = userRepository;
            _userManager = userManager;
        }

        // GET: api/Adverts
        [HttpGet]
        public IActionResult Get()
        {
            var adverts = _advertRepository.GetAllAdverts();

            return Ok(adverts);
        }

        // GET: api/Adverts/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            var advert = _advertRepository.GetAdvertById(id);
            if (advert == null)
            {
                return NotFound();
            }

            return Ok(advert);
        }

        // POST: api/Adverts
        [HttpPost]
        public IActionResult Post(Advert advert)
        {
            if (User.Identity.IsAuthenticated)
            {
                // Getting user's Id from the session
                // Previous approach which was iterating through all users trying to find matching one
                // User.FindFirst(ClaimTypes.NameIdentifier).Value;
                var userId = _userManager.GetUserId(HttpContext.User);
                advert.AuthorId = userId;

                // Render back to the creation route, otherwise validation does not work
                if (advert.Title == null || advert.ShortDescription == null || advert.LongDescription == null) return Create();

                // Custom image if user does not provide any
                if (advert.ImageUrl == null) advert.ImageUrl = "https://img.tickld.com/filter:scale/quill/e/7/1/3/2/9/e7132910dcc33f74a29ac914162f97e82624ce06.jpg?mw=650";

                _advertRepository.Create(advert);
                return Redirect("/");
            }
            else
            {
                return Redirect("/Identity/Account/Login");
            }
        }

        // PUT: api/Adverts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Check if user is logged in
            if (User.Identity.IsAuthenticated)
            {
                // Getting logged in user's id
                var userId = _userManager.GetUserId(HttpContext.User);

                if (_advertRepository.CanDelete(userId, id))
                {
                    _advertRepository.Delete(id);

                    // TODO: Redirect to proper page with detailed information
                    return Redirect("/");
                }
                else
                {
                    // TODO: Redirect to proper page with detailed information
                    return Redirect("/");
                }
            }

            return Redirect("/");
        }
    }
}
