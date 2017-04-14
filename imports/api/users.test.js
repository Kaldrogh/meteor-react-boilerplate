import expect from "expect";
import { validateNewUser } from "./users";
import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  describe("Users", function() {
    it("should allow valid email adress", function() {
      const testUser = {
        emails: [
          {
            address: "marco@gmail.com"
          }
        ]
      };
      const res = validateNewUser(testUser);
      expect(res).toBe(true);
    });
    it("should reject invalid email", function() {
      const testUser = {
        emails: [
          {
            address: "caca"
          }
        ]
      }
      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });
  });
}
