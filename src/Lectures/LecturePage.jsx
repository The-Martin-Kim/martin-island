import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import {problemData} from "./ProblemData";

const DisplayLink = ({num, title}) => (
    <>
        <Link href={`https://www.acmicpc.net/problem/${num}`} target="_blank" underline="none">
            {title}
        </Link>
        <br />
    </>
);

function LecturePage() {
    return (
        <div className="GowunDodum-Regular">
            {problemData.map((algorithm, algorithmIndex) => (
                <Accordion key={algorithmIndex}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${algorithmIndex}-content`}
                        id={`panel${algorithmIndex}-header`}
                    >
                        <h4>{algorithm.title}</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        {algorithm.sections.map((chapter, chapterIndex) => (
                            <div key={chapterIndex}>
                                <h5>{chapter.title}</h5>
                                {chapter.problems.map((problem) => (
                                    <DisplayLink
                                        key={problem.num}
                                        num={problem.num}
                                        title={problem.title}
                                    />
                                ))}
                                <br />
                            </div>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default LecturePage;