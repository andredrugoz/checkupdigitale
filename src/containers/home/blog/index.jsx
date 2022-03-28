import React from "react";
import BlogData from "../../../data/blog.json";
import SectionTitleTwo from "../../../components/section-title-two";
import BlogGrid from "../../../components/blog";

const HomeBlog = () => {
    return (
        <div className="blog-section section-pb">
            <div className="container">
                <SectionTitleTwo
                    classOption="title-section mb-lg-10 pb-lg-1"
                    subTitle="BLOG POST"
                    title="Ultimi <span class='text-primary'>Post</span> dal Blog"
                    excerptClassOption="mt-lg-10 pt-lg-3 mb-10 mb-lg-0"
                    excerpt="Scopri informazioni importanti per la tua attività nel nostro blog"
                />
                <div className="row mb-n7">
                    {BlogData &&
                        BlogData.slice(0, 3).map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-lg-4 col-sm-6 mb-7"
                                >
                                    <BlogGrid
                                        classOption="null"
                                        key={key}
                                        data={single}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;
