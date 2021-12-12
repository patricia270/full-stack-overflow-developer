interface QuestionBody {
    question: string;
    student: string;
    class: string;
    tags: string;
}

interface QuestionCreated extends QuestionBody {
    id: number;
}

interface HttpResponse {
    statusCode: number;
    body?: any;
}

export {
    QuestionBody,
    QuestionCreated,
    HttpResponse,
};
