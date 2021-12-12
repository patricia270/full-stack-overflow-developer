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

interface UserBody {
    name: string;
    class: string;
}

export {
    QuestionBody,
    QuestionCreated,
    HttpResponse,
    UserBody,
};
