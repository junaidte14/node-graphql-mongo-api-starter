import Course from "../../models/Course";

export default {
  Query: {
    async getCourses() {
      try {
        const courses = await Course.find();
        return courses;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getCourse(parent, { id }, context, info) {
      try {
        return Course.findById(id);
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async addCourse(parent, { name, url }, context, info) {
      try {
        const course = await new Course({name, url});
        return course.save();
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteCourse(parent, { id }, context, info) {
      try {
        return Course.findOneAndRemove(id);
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateCourse(parent, { id, name, url }, context, info) {
      try {
        let courseFields = {name, url};
        return Course.findByIdAndUpdate(id, { $set: courseFields }, { new: true });
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
