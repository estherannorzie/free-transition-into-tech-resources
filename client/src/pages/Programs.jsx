import { gql, useQuery } from "@apollo/client";
import ProgramCard from "../components/ProgramCard";

const Programs = () => {
  const GET_PROGRAMS = gql`
    query getPrograms {
      programs {
        id
        name
        specialty
        URL
        description
        type
        country
        lengthInWeeks
        offersCareerGuidance
        onHiatus
        additionalResources
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PROGRAMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      <header>
        <h1>Programs</h1>
      </header>

      {!loading && !error && (
        <>
          {data.programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </>
      )}
    </>
  );
};

export default Programs;
