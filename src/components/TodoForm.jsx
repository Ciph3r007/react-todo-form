import React from "react";

function TodoForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div class="min-h-screen bg-purple-400 flex justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <div class="py-44 px-44 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
              Add a Todo
            </h1>
          </div>
          <div class="space-y-4">
            <input
              type="text"
              name="name"
              required
              value={todoInfo.name}
              onChange={handleChange}
              placeholder="Name"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              type="email"
              name="email"
              required
              value={todoInfo.email}
              onChange={handleChange}
              placeholder="Email"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <textarea
              type="text"
              name="todo"
              rows="4"
              required
              value={todoInfo.todo}
              onChange={handleChange}
              placeholder="To-do"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          <div class="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
            >
              Submit
            </button>
            <FaArrowAltCircleLeft
              size="2em"
              className="mt-5 mx-auto text-sm "
              onClick={handleClick}
            />
          </div>
        </div>
        <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </form>
  );
}

export default TodoForm;