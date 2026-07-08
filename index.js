export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>What You Get with Claude Cowork</title>

<style>
body {
    margin: 0;
    font-family: 'Georgia', serif;
    background: #f8fafc;
    color: #1e293b;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 60px 20px;
}

h1 {
    font-size: 42px;
    margin-bottom: 20px;
    color: #0f172a;
}

h2 {
    margin-top: 40px;
    color: #7c3aed;
}

p {
    font-size: 17px;
    line-height: 1.9;
}

.box {
    background: #ffffff;
    border-left: 4px solid #7c3aed;
    padding: 25px;
    margin-top: 25px;
    border-radius: 6px;
}

a {
    color: #2563eb;
    text-decoration: none;
    font-weight: bold;
}

.hero {
    text-align: center;
    padding: 80px 20px;
    background: #e2e8f0;
}

.footer {
    text-align: center;
    margin-top: 60px;
    padding: 30px;
    color: #64748b;
    border-top: 1px solid #cbd5f5;
}
</style>

</head>

<body>

<div class="hero">
    <h1>What You Really Get with Claude Cowork</h1>
    <p>
        This is not about features. This is about outcomes. When you start using Claude Cowork, the real value is not what it does—but how it transforms your workflow.
    </p>
</div>

<div class="container">

<h2>From Effort to Execution</h2>
<p>
Instead of spending hours doing repetitive tasks, you shift toward execution. Claude Cowork analyzes your request, breaks it into structured steps, and completes the work efficiently.
</p>

<p>
Your role evolves from performing tasks manually to guiding intelligent processes.
</p>

<h2>A Thinking Partner, Not Just a Tool</h2>
<p>
You are not just getting automation—you are working with a system that collaborates with you. It helps you write, organize, and solve problems in a more structured and efficient way.
</p>

<h2>Real Task Completion</h2>
<p>
Claude Cowork does not stop at suggestions. It delivers usable outputs—documents, workflows, and organized information that can be applied immediately in real work scenarios.
</p>

<div class="box">
<p>
Explore more details here:<br><br>
<a href="https://coworkacademy.com/what-you-get/" target="_blank">
The Cowork Academy
</a>
</p>
</div>

<h2>Direct Interaction with Your Work</h2>
<p>
The system can interact with your files and content, allowing it to read, modify, and organize information in a practical way that aligns with your tasks.
</p>

<h2>Continuous Productivity</h2>
<p>
Workflows can continue seamlessly, allowing you to maintain productivity without constantly repeating instructions or starting from scratch.
</p>

<h2>A System That Grows With You</h2>
<p>
As you gain experience, you can build structured workflows and reusable processes that improve efficiency over time.
</p>

<h2>What You Actually Gain</h2>
<p>
• Reduced manual workload<br>
• Faster execution of tasks<br>
• Better organization of information<br>
• Increased efficiency<br>
• More focus on high-value work
</p>

<h2>Final Perspective</h2>
<p>
Claude Cowork enhances how work gets done. Once you understand how to guide it effectively, you begin operating at a higher level of productivity and control.
</p>

</div>

<div class="footer">
<p>© 2026 — What You Get Guide</p>
</div>

</body>
</html>`, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
