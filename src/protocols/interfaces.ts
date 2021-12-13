interface QuestionBody {
    question: string;
    student: string;
    class: string;
    tags: string;
}

interface UnansweredQuestion extends QuestionBody {
    id?: number;
    answered?: boolean;
    submitAt: string;
}

interface answeredQuestion extends QuestionBody {
    id?: number;
    answered: boolean;
    submitAt: string;
    answeredAt: string;
    answeredBy: string;
    answer: string;
}

interface UserBody {
    name: string;
    class: string;
}

interface HttpResponse {
    statusCode: number;
    body?: any;
}

export {
    QuestionBody,
    UnansweredQuestion,
    answeredQuestion,
    HttpResponse,
    UserBody,
};
