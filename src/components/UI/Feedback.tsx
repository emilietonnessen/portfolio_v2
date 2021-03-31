interface FeedbackProps {
    type: 'success' | 'warning' | 'error';
    message: string;
}

const Feedback: React.FC<FeedbackProps> = ({type, message}) =>  (
    <div className={type}>
        {message}
    </div>
);

export default Feedback;