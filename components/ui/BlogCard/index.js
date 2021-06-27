import React from "react";
import { StyledCard } from "./styled";
import { P18B } from "../../atoms/P18B";
import { P16 } from "../../atoms/P16";
import Link from "next/link";

const ServiceCard = ({ data, className, replaceN }) => {
    return (
        <StyledCard className={className}>
            <div className="image">
                <img src={data?.image?.url} alt={`solid-link-co-${data?.title}`} />
            </div>
            <div className="texts">
                <P18B textTransform="capitalize" margin="0 0 16px 0">
                    {data?.title}
                </P18B>
                <P16 color="#797979">{replaceN ? data?.content?.text?.replaceAll("\\n", " ")?.substring(0, 320)?.trim() + "..." : null}</P16>
            </div>
            <div className="read-more">
                <Link href={`/blog/${data?.title?.split(" ")?.join("-")}`}>
                    <a>Read more</a>
                </Link>
            </div>
        </StyledCard>
    );
};

export default ServiceCard;
