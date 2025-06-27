const { spawn } = require("child_process");

const startProcess = (cmd, args, cwd) => {
  const process = spawn(cmd, args, { cwd, stdio: "inherit", shell: true });

  process.on("close", (code) => {
    console.log(`${cmd} exited with code ${code}`);
  });
};

// Start frontend
startProcess("npm", ["run", "dev"], "./frontend");

// Start backend
startProcess("npm", ["run", "start"], "./backend");
