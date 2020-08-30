import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;


public class Q1 {

	public static void main(String[] args) {
		Q1 student = new Q1();
		student.createConnection();
	}
	
	void createConnection(){
		try {
			System.out.println("exists");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ncp", "root", "root");
			Statement st = con.createStatement();
			
			System.out.println("Query 1 : Retrieve students names and roll number whose CGPA is greater than 8");
			ResultSet r = st.executeQuery("Select name, roll from students where cgpa > 8");
			while(r.next())
			{
				String name = r.getString("name");
				String rollno = r.getString("roll");
				System.out.println(name + " " + rollno);
			}
			
			System.out.println();
			
			System.out.println('Query 2 : Retrieve roll numbers of students who are placed in “Infosys”');
			r = st.executeQuery("Select roll from students where company = 'Infosys'");
			while(r.next())
			{
				String roll = r.getString("roll");
				System.out.println(roll);
			}
			
			System.out.println();
			System.out.println("Query 3: Sort the students based on the roll numbers");
			r = st.executeQuery("Select * from students ORDER BY roll");
			while(r.next())
			{
				String rollno = r.getString("roll");
				System.out.println(rollno);
			}
		}
		catch (SQLException ex) {
			System.out.println(ex);
		}
	}

}