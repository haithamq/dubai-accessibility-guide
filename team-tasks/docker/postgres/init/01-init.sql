-- Team Tasks Database Initialization
-- This script creates sample data for the team-tasks application

-- Insert default departments
INSERT INTO departments (name, description) VALUES
('Design', 'UI/UX Design and Creative Team'),
('Engineering', 'Software Development and Engineering'),
('Documentation', 'Technical Writing and Documentation'),
('Product', 'Product Management and Strategy'),
('Quality Assurance', 'Testing and Quality Assurance'),
('Marketing', 'Marketing and Communications')
ON CONFLICT (name) DO NOTHING;

-- Insert sample assignees data
INSERT INTO assignees (id, name, email, phone, role, department, avatar, join_date, tasks_completed, current_tasks, overdue_tasks) VALUES
('1', 'Sarah Johnson', 'sarah.johnson@company.com', '+1 (555) 123-4567', 'Senior Designer', 'Design', 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-01-15', 12, 3, 0),
('2', 'Mike Chen', 'mike.chen@company.com', '+1 (555) 234-5678', 'Full Stack Developer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-03-20', 8, 2, 1),
('3', 'Emily Davis', 'emily.davis@company.com', '+1 (555) 345-6789', 'Technical Writer', 'Documentation', 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-02-10', 15, 1, 0),
('4', 'Alex Rodriguez', 'alex.rodriguez@company.com', '+1 (555) 456-7890', 'DevOps Engineer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-04-05', 6, 4, 2),
('5', 'Lisa Wang', 'lisa.wang@company.com', '+1 (555) 567-8901', 'Product Manager', 'Product', 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-01-30', 20, 5, 1),
('6', 'David Kim', 'david.kim@company.com', '+1 (555) 678-9012', 'QA Engineer', 'Quality Assurance', 'https://api.dicebear.com/7.x/avataaars/svg?seed=david&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-05-12', 9, 2, 0),
('7', 'Maria Garcia', 'maria.garcia@company.com', '+1 (555) 789-0123', 'UX Researcher', 'Design', 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-06-18', 7, 3, 0),
('8', 'James Wilson', 'james.wilson@company.com', '+1 (555) 890-1234', 'Frontend Developer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-07-22', 11, 2, 1),
('9', 'Sophie Brown', 'sophie.brown@company.com', '+1 (555) 901-2345', 'Marketing Specialist', 'Marketing', 'https://api.dicebear.com/7.x/avataaars/svg?seed=sophie&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-08-14', 14, 4, 0),
('10', 'Ryan Thompson', 'ryan.thompson@company.com', '+1 (555) 012-3456', 'Backend Developer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=ryan&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', '2023-09-05', 5, 3, 2)
ON CONFLICT (id) DO NOTHING;

-- Insert sample tasks data
INSERT INTO tasks (id, title, description, priority, status, assignee_id, assignee_name, due_date) VALUES
('1', 'Design new landing page', 'Create a modern and responsive landing page design for the new product launch', 'high', 'in-progress', '1', 'Sarah Johnson', '2024-02-01'),
('2', 'Implement user authentication', 'Add secure user authentication with JWT tokens and role-based access control', 'high', 'todo', '2', 'Mike Chen', '2024-01-25'),
('3', 'Write API documentation', 'Create comprehensive API documentation with examples and usage guidelines', 'medium', 'completed', '3', 'Emily Davis', '2024-01-20'),
('4', 'Set up CI/CD pipeline', 'Configure automated testing and deployment pipeline for the project', 'medium', 'todo', '4', 'Alex Rodriguez', '2024-01-30'),
('5', 'Optimize database queries', 'Review and optimize slow database queries to improve application performance', 'low', 'in-progress', '6', 'David Kim', '2024-02-05'),
('6', 'User research for mobile app', 'Conduct user research and create personas for the mobile application', 'medium', 'todo', '7', 'Maria Garcia', '2024-02-15'),
('7', 'Implement responsive design', 'Make the application fully responsive across all device sizes', 'high', 'in-progress', '8', 'James Wilson', '2024-01-28'),
('8', 'Create marketing campaign', 'Develop a comprehensive marketing campaign for the new feature launch', 'medium', 'todo', '9', 'Sophie Brown', '2024-02-10'),
('9', 'API performance optimization', 'Optimize API endpoints for better performance and scalability', 'high', 'todo', '10', 'Ryan Thompson', '2024-02-08'),
('10', 'Product roadmap planning', 'Plan and document the product roadmap for Q2 2024', 'medium', 'in-progress', '5', 'Lisa Wang', '2024-02-20')
ON CONFLICT (id) DO NOTHING; 