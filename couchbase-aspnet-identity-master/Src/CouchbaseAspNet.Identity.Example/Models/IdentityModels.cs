﻿
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Couchbase.AspNet.Identity;
using Couchbase;

namespace CouchbaseAspNet.Identity.CoreSessionHandler.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : ThrowableBucket
    {
        public ApplicationDbContext()
            : base(ClusterHelper.GetBucket("default"))
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}